"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from "react";

const SPEED_PX_PER_FRAME = 0.6;
const DRAG_CLICK_THRESHOLD = 6;

type MarqueeState = {
  isHovered: boolean;
  isDragging: boolean;
  pointerType: string;
  startX: number;
  startScrollLeft: number;
  dragDistance: number;
  suppressClick: boolean;
};

export function useMarquee<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);
  const stateRef = useRef<MarqueeState>({
    isHovered: false,
    isDragging: false,
    pointerType: "mouse",
    startX: 0,
    startScrollLeft: 0,
    dragDistance: 0,
    suppressClick: false,
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frameId: number;
    const tick = () => {
      const state = stateRef.current;
      if (!state.isHovered && !state.isDragging) {
        const halfWidth = el.scrollWidth / 2;
        el.scrollLeft += SPEED_PX_PER_FRAME;
        if (halfWidth > 0 && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const onMouseEnter = () => {
    stateRef.current.isHovered = true;
  };

  const onMouseLeave = () => {
    stateRef.current.isHovered = false;
  };

  const onPointerDown = (event: ReactPointerEvent<T>) => {
    const el = containerRef.current;
    const state = stateRef.current;
    if (!el) return;
    state.isDragging = true;
    state.pointerType = event.pointerType;
    state.dragDistance = 0;
    if (event.pointerType !== "touch") {
      state.startX = event.clientX;
      state.startScrollLeft = el.scrollLeft;
      el.setPointerCapture(event.pointerId);
    }
  };

  const onPointerMove = (event: ReactPointerEvent<T>) => {
    const el = containerRef.current;
    const state = stateRef.current;
    if (!el || !state.isDragging || state.pointerType === "touch") return;
    const delta = event.clientX - state.startX;
    el.scrollLeft = state.startScrollLeft - delta;
    state.dragDistance = Math.abs(delta);
  };

  const endDrag = () => {
    const state = stateRef.current;
    state.isDragging = false;
    if (state.pointerType !== "touch" && state.dragDistance > DRAG_CLICK_THRESHOLD) {
      state.suppressClick = true;
    }
  };

  const onClickCapture = (event: ReactMouseEvent<T>) => {
    if (stateRef.current.suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      stateRef.current.suppressClick = false;
    }
  };

  return {
    containerRef,
    handlers: {
      onMouseEnter,
      onMouseLeave,
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onClickCapture,
    },
  };
}
