'use client';

import React, { useMemo } from 'react';
import { SafeListings, SafeUser } from '@/app/types';
import { Reservation } from '@prisma/client';
import { categories } from '@/app/components/Navbar/Categories';
import Container from '@/app/components/shared/Container';
import ListingHead from '@/app/components/Listing/ListingHead';
import ListingInfo from '@/app/components/Listing/ListingInfo';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListings & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing]);

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div
            className='
            grid
            grid-cols-1
            md:grid-cols-7
            md:gap-10
            mt-6
          '
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              guestCount={listing.guestCount}
              roomCount={listing.roomCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
