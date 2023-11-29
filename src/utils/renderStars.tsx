import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
  faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";

export const renderStars = (rate: number): JSX.Element[] => {
  let stars: JSX.Element[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(
        <FontAwesomeIcon
          key={`full_${i}`}
          icon={solidStar}
          className="text-yellow-500"
        />
      );
    } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
      stars.push(
        <FontAwesomeIcon
          key={`half_${i}`}
          icon={faStarHalfAlt}
          className="text-yellow-500"
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          key={`empty_${i}`}
          icon={regularStar}
          className="text-yellow-500"
        />
      );
    }
  }
  return stars;
};
