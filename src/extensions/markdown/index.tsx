import molecule from '@dtinsight/molecule';
import { IExtension } from '@dtinsight/molecule/esm/model/extension';
import { IExtensionService } from '@dtinsight/molecule/esm/services';
import { IEditorTab } from '@dtinsight/molecule/esm/model';
import MDPreview from '../../views/MDPreview';
import { LEFT_PANEL_ID, RIGHT_PANEL_ID } from '../../common/const';

const mdEditor = {
    id: '1',
    name: 'Markdown',
    closable: false,
    data: {
        language: 'markdown',
    },
};
const previewTab: IEditorTab = {
    id: '2',
    name: 'Preview',
    closable: false,
    renderPane: () => {
        return <MDPreview />;
    },
};

export default class MDExtension implements IExtension {
    id: string = 'MDExtension';
    name: string = 'MDExtension';

    async activate(extensionCtx: IExtensionService) {
        molecule.editor.open(mdEditor, LEFT_PANEL_ID);
        molecule.editor.open(previewTab, RIGHT_PANEL_ID);

        molecule.layout.toggleMenuBarVisibility();
        molecule.layout.togglePanelVisibility();
        molecule.layout.toggleSidebarVisibility();
        molecule.layout.toggleActivityBarVisibility();

        // const editor = await new Promise<MonacoEditor.IStandaloneCodeEditor>(
        //     (resolve) => {
        //         setTimeout(() => resolve(molecule.editor.getGroupById(1)?.editorInstance));
        //     }
        // );

        // editor.onDidChangeModelContent(() => {
        //     const value = editor.getValue();
        // });

    }
    dispose(extensionCtx: IExtensionService): void {
        throw new Error('Method not implemented.');
    }

}

