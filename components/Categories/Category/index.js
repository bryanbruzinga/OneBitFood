import Image from "next/image";
import Link from "next/link";

export default function Category(props) {
  return (
    <div className="slider-item">
      <Link href={`/restaurants?category=${props.title}`}>
        <a>
          <Image
            src={props.image_url}
            width={300}
            height={200}
            alt={props.title}
            className="px-1 clickable_effect"
          />
        </a>
      </Link>
      <p className="fw-bold">{props.title}</p>
    </div>
  );
}