import { IExtension } from '@dtinsight/molecule/esm/model';
import MDExtension from './markdown';

const extensions: IExtension[] = [new MDExtension()];

export default extensions;

