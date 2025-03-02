import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, {
  IListingsParams,
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import HomeClient from "./components/HomeClient"; // Import Client Component

export const dynamic = "force-dynamic"; // Bắt buộc render trên server

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({
  searchParams,
}: HomeProps) => {
  const listings =
    await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <HomeClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default Home;
