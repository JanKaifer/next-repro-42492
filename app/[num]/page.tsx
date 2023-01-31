import Link from "next/link";
import styles from "./styles.module.css";

export default function Page({ params: { num } }) {
  return (
    <div>
      {new Array(100).fill(0).map((_, i) => (
        <div key={i} className={styles.square}>
          <Link href={`/${Number(num) - 1}`}>lower</Link>
          <div>{num}</div>
          <Link href={`/${Number(num) + 1}`}>higher</Link>
        </div>
      ))}
    </div>
  );
}
