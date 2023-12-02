import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const renderStars = (rate: number) => {
  let stars: JSX.Element[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      // This will add a full star for each integer less than or equal to the rate
      stars.push(
        <FontAwesomeIcon
          key={`full_${i}`}
          icon={solidStar}
          className="text-[#AA8A41]"
        />
      );
    } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
      // This will add a half star only if the rate has a fractional part
      // and we're at the next integer just above the rate
      stars.push(
        <FontAwesomeIcon
          key={`half_${i}`}
          icon={faStarHalfAlt}
          className="text-[#AA8A41]"
        />
      );
    } else {
      // This adds an empty star for all other cases
      stars.push(
        <FontAwesomeIcon
          key={`empty_${i}`}
          icon={regularStar}
          className="text-[#AA8A41]"
        />
      );
    }
  }
  return stars;
};
