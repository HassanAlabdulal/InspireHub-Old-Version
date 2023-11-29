import { Card, CardBody, Typography } from "@material-tailwind/react";

// Define the type for the component's props
interface cardProps {
  image: string;
  title: string;
  description: string;
}

export default function CardWithImage({
  image,
  title,
  description,
}: cardProps) {
  return (
    <Card className="mt-6 w-96 bg-[#f7f7f7] hover:shadow-lg hover:scale-105 transition-all duration-500">
      <CardBody className="text-center">
        <img src={image} alt={title} className="w-12 h-12 mb-4 text-gray-900" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
}
