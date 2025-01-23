import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import NavBar from "../components/layout/Navbar";

const cards = [
  {
    title: 'JANUARY',
    content: [
      { count: 22, text: 'Seattle, WA' },
      { count: 24, text: 'Vancouver, BC' },
      { count: 26, text: 'Portland, OR' },
      { count: 28, text: 'Oakland, CA' },
      { count: 31, text: 'Los angeles, CA' },
    ],
  },
  {
    title: 'FEBUARY',
    content: [  
        { count: 2, text: 'San Diego, Ca' },
        { count: 3, text: 'Phoenix, Az' },
        { count: 8, text: 'Salt Lake City, Ut' },
        { count: 10, text: 'Denver, Co' },
        { count: 13, text: 'Dallas, Tx' },
        { count: 14, text: 'Austin, Tx' },
        { count: 15, text: 'San Antonio, Tx' },
        { count: 16, text: 'Houston, Tx' },
        { count: 18, text: 'Atlanta, Ga' },
        { count: 21, text: 'ST. Petersburg, Fl' },
        { count: 22, text: 'Miami, Fl' },
        { count: 24, text: 'Charlotte, Nc' },
        { count: 26, text: 'Silver Springs, Md' },
    ],
  },
  {
    title: 'MARCH',
    content: [
        { count: 1, text: 'Philadelphia, Pa' },
        { count: 3, text: 'New York City, Ny' },
        { count: 7, text: 'Wallingford, Ct' },
        { count: 9, text: 'Boston, Ma' },
        { count: 12, text: 'Montreal, Qb' },
        { count: 15, text: 'Toronto, On' },
        { count: 17, text: 'Detroit, Mi' },
        { count: 18, text: 'Grand Rapids, Mi' },
        { count: 21, text: 'Chicago, Il' },
        { count: 23, text: 'Madison, Wi' },
        { count: 24, text: 'Minneapolis, Mn' },
        { count: 25, text: 'Kansas City, Mo' },
        { count: 28, text: 'Cincinnatti, Oh' },
        { count: 29, text: 'Nashville, Tn' },
    ],
  },
];

export default async function About() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <NavBar/>
      <header className="border-none min-h-screen w-full bg-[url('/Images/hero-img.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className="mt-28 lg:mt-[12%] flex flex-col lg:flex-row gap-8 justify-center text-white">
          {cards.map((card, index) => (
            <Card key={index} className="bg-black/20 p-4 backdrop-blur-xl border-none">
              <CardHeader>
                <CardTitle className="text-white text-3xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {card.content.map((item, index) => (
                  <div key={index} className="flex flex-row justify-between w-full mx-auto gap-28 text-white text-base">
                    <span>{item.count}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </header>
    </main>
  );
}