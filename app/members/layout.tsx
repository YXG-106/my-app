import Sheet from "@/app/conponents/Sheet";
import Hero from "@/app/conponents/Hero";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props){
return (
    <>
<Hero title="Members" sub="メンバー"/>
<Sheet>{children}</Sheet>
</>
);
}
