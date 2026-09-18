"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from "react";

const SPEED_PX_PER_FRAME = 0.6;
const DRAG_CLICK_THRESHOLD = 8;
const SUPPRESS_CLICK_RESET_MS = 400;

type MarqueeState = {
  isHovered: boolean;
  isDragging: boolean;
  pointerType: string;
  startX: number;
  startScrollLeft: number;
  dragDistance: number;
  suppressClick: boolean;
  moveHandler: ((event: PointerEvent) => void) | null;
  upHandler: (() => void) | null;
  suppressTimer: ReturnType<typeof setTimeout> | null;
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
    moveHandler: null,
    upHandler: null,
    suppressTimer: null,
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

  useEffect(() => {
    const state = stateRef.current;
    return () => {
      if (state.moveHandler) window.removeEventListener("pointermove", state.moveHandler);
      if (state.upHandler) {
        window.removeEventListener("pointerup", state.upHandler);
        window.removeEventListener("pointercancel", state.upHandler);
      }
      if (state.suppressTimer) clearTimeout(state.suppressTimer);
    };
  }, []);

  const onMouseEnter = () => {
    stateRef.current.isHovered = true;
  };

  const onMouseLeave = () => {
    stateRef.current.isHovered = false;
  };

  const clearDragListeners = () => {
    const state = stateRef.current;
    if (state.moveHandler) {
      window.removeEventListener("pointermove", state.moveHandler);
      state.moveHandler = null;
    }
    if (state.upHandler) {
      window.removeEventListener("pointerup", state.upHandler);
      window.removeEventListener("pointercancel", state.upHandler);
      state.upHandler = null;
    }
  };

  const endMouseDrag = () => {
    const state = stateRef.current;
    state.isDragging = false;
    clearDragListeners();
    if (state.dragDistance > DRAG_CLICK_THRESHOLD) {
      state.suppressClick = true;
      if (state.suppressTimer) clearTimeout(state.suppressTimer);
      // Safety net: if the browser never fires the trailing click (common after a
      // real drag), this guarantees suppressClick doesn't stay stuck forever.
      state.suppressTimer = setTimeout(() => {
        state.suppressClick = false;
      }, SUPPRESS_CLICK_RESET_MS);
    }
  };

  const onPointerDown = (event: ReactPointerEvent<T>) => {
    const el = containerRef.current;
    const state = stateRef.current;
    if (!el || event.button !== 0) return;

    state.isDragging = true;
    state.pointerType = event.pointerType;
    state.dragDistance = 0;

    if (event.pointerType === "touch") return;

    state.startX = event.clientX;
    state.startScrollLeft = el.scrollLeft;

    const handleMove = (moveEvent: PointerEvent) => {
      const delta = moveEvent.clientX - state.startX;
      el.scrollLeft = state.startScrollLeft - delta;
      state.dragDistance = Math.max(state.dragDistance, Math.abs(delta));
    };
    clearDragListeners();
    state.moveHandler = handleMove;
    state.upHandler = endMouseDrag;
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", endMouseDrag);
    window.addEventListener("pointercancel", endMouseDrag);
  };

  const onPointerUp = () => {
    if (stateRef.current.pointerType === "touch") {
      stateRef.current.isDragging = false;
    }
  };

  const onClickCapture = (event: ReactMouseEvent<T>) => {
    const state = stateRef.current;
    if (state.suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      state.suppressClick = false;
      if (state.suppressTimer) {
        clearTimeout(state.suppressTimer);
        state.suppressTimer = null;
      }
    }
  };

  return {
    containerRef,
    handlers: {
      onMouseEnter,
      onMouseLeave,
      onPointerDown,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onClickCapture,
    },
  };
}
