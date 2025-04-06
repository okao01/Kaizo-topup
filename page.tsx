import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <header className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/file-EvjCAqhENKbq4qm9M6u7PT"
            alt="KAIZO Logo"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
        <h1 className="text-4xl font-bold">KAIZO DISCOUNTED GAMES CREDIT</h1>
        <p className="text-muted-foreground mt-2">Fast, Reliable & Affordable Game Top-ups</p>
      </header>

      <Tabs defaultValue="mlbb">
        <TabsList className="grid grid-cols-2 w-full mb-6">
          <TabsTrigger value="mlbb">MLBB</TabsTrigger>
          <TabsTrigger value="bgmi">BGMI</TabsTrigger>
        </TabsList>

        <TabsContent value="mlbb">
          <Section title="Small Recharge Packs" items={[
            ["5 Diamonds", "₹12"],
            ["10+1 Diamonds (11)", "₹18"],
            ["13+1 Diamonds (14)", "₹25"],
            ["20+2 Diamonds (22)", "₹34"],
            ["38+4 Diamonds (42)", "₹70"],
            ["51+5 Diamonds (56)", "₹82"],
          ]} />

          <Section title="All Server Recharge Packs" items={[
            ["Weekly Diamond Pass", "₹140"],
            ["Twilight Pass", "₹742"],
            ["Coupon Pass", "₹405"],
            ["78+8 Diamonds (86)", "₹114"],
            ["156+16 Diamonds (172)", "₹225"],
            ["234+23 Diamonds (257)", "₹327"],
            ["625+81 Diamonds (706)", "₹885"],
            ["1860+335 Diamonds (2195)", "₹2676"],
            ["3099+589 Diamonds (3688)", "₹4466"],
            ["4649+883 Diamonds (5548)", "₹6743"],
            ["7740+1548 Diamonds (9228)", "₹11200"],
          ]} />

          <Section title="Regional Recharge Packs" items={[
            ["102+10 Diamonds (112)", "₹162"],
            ["203+20 Diamonds (223)", "₹324"],
            ["303+33 Diamonds (336)", "₹485"],
            ["504+66 Diamonds (570)", "₹810"],
            ["1007+156 Diamonds (1163)", "₹1620"],
            ["2015+383 Diamonds (2398)", "₹3240"],
            ["5035+1007 Diamonds (6042)", "₹8089"],
          ]} />
        </TabsContent>

        <TabsContent value="bgmi">
          <Section title="BGMI UC Top-Up (via Character ID)" items={[
            ["60 UC", "₹75"],
            ["120 UC", "₹150"],
            ["325 UC", "₹380"],
            ["660 UC", "₹750"],
            ["1800 UC", "₹1900"],
            ["3850 UC", "₹3800"],
            ["8100 UC", "₹7500"],
            ["16200 UC", "₹15000"],
          ]} />

          <Section title="Limited Offer" items={[
            ["900 UC", "₹1000"],
            ["4150 UC", "₹4000"],
          ]} />

          <p className="text-sm mt-2 text-yellow-600 font-medium">*Note: Bonus UC amount is subject to change. Please ask before recharging!*</p>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-8">
        <Button asChild size="lg">
          <a href="https://wa.me/+919366798553" target="_blank" rel="noopener noreferrer">
            Order Now on WhatsApp
          </a>
        </Button>
      </div>
    </main>
  );
}

function Section({ title, items }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(([label, price], i) => (
          <Card key={i}>
            <CardContent className="p-4 flex justify-between items-center">
              <span>{label}</span>
              <span className="font-semibold">{price}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
