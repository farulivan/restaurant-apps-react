import { UserPlaceholderIcon } from '../../assets/icons/icons';

const CustomerReviews: React.FC<{
  review: string;
  name: string;
  date: string;
  index: number;
}> = ({ review, name, date, index }) => {
  return (
    <div key={index} className="review-container flex items-center gap-3 w-full">
      <div className="min-w-[15%] max-w-[15%] object-contain">
        <UserPlaceholderIcon />
      </div>
      <div className="flex flex-col gap-1">
        <p className="review py-2 font-semibold text-sm italic">" {review} "</p>
        <p className="review-name text-fontSecondary">
          by <span className="text-primary font-semibold">{name}</span>
        </p>
        <p className="review-date text-fontSecondary">at {date}</p>
      </div>
    </div>
  );
};

export default CustomerReviews;
