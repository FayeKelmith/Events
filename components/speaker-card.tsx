"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { data } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SpeakerCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 justify-around">
      {data.map((speaker) => (
        <Card key={speaker.id}>
          <CardHeader>
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-80 object-cover"
            />
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-bold">{speaker.name}</h2>
            <p className="text-muted-foreground">{speaker.role}</p>
            <p className="text-muted-foreground">{speaker.company}</p>
          </CardContent>
          <CardFooter>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-80 text-xl">
                  Learn More...
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="p-4 min-w-full">
                  <h2 className="text-xl font-bold">{speaker.name}</h2>
                  <p className="text-muted-foreground">{speaker.information}</p>
                </div>
              </PopoverContent>
            </Popover>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SpeakerCard;
