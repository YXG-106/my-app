import Hero from "../conponents/Hero";
import Sheet from "../conponents/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function NewsLayout ({ children }: Props){
    return (
        <>
        <Hero title="News" sub="ニュース"/>
        <Sheet>{children}</Sheet>
        </>
    );
}