import { Quill } from 'react-quill';

const BlockEmbed = Quill.import('blots/block/embed');
class LoadingImageBlot extends BlockEmbed {
  static create({ src, className = "" }) {
    const node = super.create();
    node.setAttribute('class', className);

    const img = document.createElement('img');
    img.setAttribute('src', src);
    node.appendChild(img);

    return node;
  }

  // I actually don't know what that's for
  static value() {
    return null;
  }
}
LoadingImageBlot.blotName = 'loadingImage';
LoadingImageBlot.tagName = 'section';

export default LoadingImageBlot;
