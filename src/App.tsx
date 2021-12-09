import React from 'react';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';
import extensions from './extensions';

function App() {
    return (
        <MoleculeProvider extensions={extensions}>
            <Workbench />
        </MoleculeProvider>
    );
}

export default App;
