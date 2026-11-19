import { useEffect, useRef } from "react";
import type { ProjectMedia as Media } from "../data/projects";

interface ProjectMediaProps {
  media: Media;
  title: string;
  /** True while the mouse is over the project card */
  hovered: boolean;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Computers with a mouse can hover; phones and tablets can't
const canHover =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function ProjectMedia({ media, title, hovered }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const largeVideoRef = useRef<HTMLVideoElement>(null);

  // Computers: play while the card is hovered, rewind when the mouse leaves
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || !canHover) return;

    if (hovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [hovered]);

  // Phones and tablets: play while the card is on screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || canHover) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.6 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Open the larger view; the native <dialog> handles Esc and keyboard focus
  const openLarge = () => {
    dialogRef.current?.showModal();
    const large = largeVideoRef.current;
    if (large) {
      large.currentTime = 0;
      if (!prefersReducedMotion) large.play().catch(() => {});
    }
  };

  const closeLarge = () => dialogRef.current?.close();

  // Clicking the dark backdrop (outside the content) closes it
  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) closeLarge();
  };

  const label = `Open the ${title} ${media.type === "video" ? "clip" : "image"} larger`;

  return (
    <div className="project-media">
      {media.type === "image" ? (
        <img src={media.src} alt={media.alt} loading="lazy" />
      ) : (
        <video
          ref={videoRef}
          src={media.src}
          poster={media.poster}
          aria-label={media.alt}
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      <button className="media-open" onClick={openLarge} aria-label={label}>
        <span className="media-badge" aria-hidden="true">
          {hovered ? "⤢ Enlarge" : media.type === "video" ? "▶" : "⤢"}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="media-dialog"
        aria-label={`${title} preview`}
        onClick={handleDialogClick}
        onClose={() => largeVideoRef.current?.pause()}
      >
        <div className="media-dialog-content">
          <button
            className="media-dialog-close"
            onClick={closeLarge}
            aria-label="Close"
          >
            ✕
          </button>
          {media.type === "image" ? (
            <img src={media.src} alt={media.alt} />
          ) : (
            <video
              ref={largeVideoRef}
              src={media.src}
              poster={media.poster}
              aria-label={media.alt}
              controls
              muted
              loop
              playsInline
              preload="none"
            />
          )}
          <p className="media-dialog-caption">{title}</p>
        </div>
      </dialog>
    </div>
  );
}

export default ProjectMedia;
