import React from 'react';
import { MarkdownRender } from 'dt-react-component';
import './style.css';
import { connect } from '@dtinsight/molecule/esm/react';
import molecule from '@dtinsight/molecule';
import { LEFT_PANEL_ID } from '../common/const';

const MDPreview = connect(molecule.editor, function ({ groups = [] }) {
    const mdGroup = groups.find((group: any) => group.id = LEFT_PANEL_ID) || {};
    const mdText = mdGroup?.tab?.data?.value || '';
    return (
        <div className="md-preview">
            <MarkdownRender text={mdText} />
        </div>
    );
});

export default MDPreview;

