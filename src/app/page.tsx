import {
    Container,
    Filters,
    Products,
    Title,
    Topbar,
} from '@/components/shared';

export default function Home() {
    return (
        <>
            <Container className="mt-6">
                <Title
                    text="Все пиццы"
                    size="lg"
                    className="font-extrabold"
                ></Title>
            </Container>
            <Topbar></Topbar>
            <Container className="mt-10 pb-14">
                <div className="flex flex-col md:flex-row gap-[20px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    <div>
                        <div>
                            <Products />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
