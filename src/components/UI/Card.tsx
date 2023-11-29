import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

// Define the type for the component's props
interface cardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function CardWithIcon({ icon, title, description }: cardProps) {
  return (
    <Card className="mt-6 w-96 bg-[#f7f7f7] hover:shadow-lg hover:scale-105 transition-all duration-500">
      <CardBody className="text-center">
        {icon}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
}
