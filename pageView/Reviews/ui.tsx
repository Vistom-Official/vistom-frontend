"use clinet";

import React from "react";
import styles from "./ui.module.scss";
import Image from "next/image";

type Review = {
  icon: string;
  name: string;
  role: string;
  rating: number;
  feedback: string;
};

const review: Review[] = [
  {
    icon: "/images/profile-1.png",
    name: "Donald Jackman",
    role: " Graphic Designer",
    rating: 4,
    feedback:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    icon: "/images/profile-2.png",
    name: "Richard Nelson",
    role: " Content Creator",
    rating: 3,
    feedback:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    icon: "/images/profile-3.png",
    name: "James Washington",
    role: " Co-founder",
    rating: 2,
    feedback:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

export const ReviewsPage: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Customer testimonials</h2>
      <p className={styles.subTitle}>What Our Users Are Saying</p>
      <div className={styles.card}>
        {review.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <Image
              className={styles.img}
              src={review.icon}
              alt=""
              width={48}
              height={48}
            />
            <h4 className={styles.name}>{review.name}</h4>
            <p className={styles.role}>{review.role}</p>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < review.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <p className={styles.feedback}>{review.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
