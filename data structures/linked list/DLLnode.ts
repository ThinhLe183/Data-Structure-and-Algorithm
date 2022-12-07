export class DLLNode<T> {
  constructor(
    public data: T,
    public next?: DLLNode<T> | undefined,
    public previous?: DLLNode<T> | undefined
  ) {}
}
