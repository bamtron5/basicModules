namespace bm.controllers {
  EmojiList.$inject = ['EmojiList'];
  export class EmojiList {
    public hello = 'hello world';
    public emojis;
    constructor (
      EMOJIS
    ) {
      this.emojis = EMOJIS;
    }
  }
}
