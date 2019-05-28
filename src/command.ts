import * as vscode from 'vscode';
import {hero_word} from './hero_word';


export  function myHero(){
    const {word="艾欧尼亚万岁！", hero='凯南'} = hero_word();
    let sayings = `${word} --- ${hero}`;
    vscode.window.showInformationMessage(sayings);
    let editor = vscode.window.activeTextEditor;
    if(!editor){
        return;
    }
    let document = editor.document;
    let selection = editor.selection;
    
    editor.edit(editBuilder =>{
        editBuilder.insert(new vscode.Position(document.lineCount, 0), sayings);
    }); 
    
}