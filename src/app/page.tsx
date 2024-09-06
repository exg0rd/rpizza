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
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="basis-1/6">
                        <Filters />
                    </div>

                    <div className='basis-5/6'>
                        <Products />
                    </div>
                </div>
            </Container>
        </>
    );
}
