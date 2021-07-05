export type Unsubscribe = () => void;

export type AnimationControls = {
  render: () => void;
  /**
   * Start animation. Conflict will stop.
   * @param trackName is the track name.
   * @throws an error if not found
   */
  startTrack(trackName: string): void;
  /**
   * Stop animation
   * @ param trackName what to play
   * If not valid, error
   */
  stopTrack(trackName: string): void;
  /**
   * Clears all memory and end
   */
  destroy(): void;
};
