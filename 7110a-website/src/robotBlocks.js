import Blockly from 'blockly';
import React from 'react';
import javascript from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';
class BlocklyDiv extends React.Component {
    componentDidMount() {
      const blocklyDiv = document.getElementById('blocklyDiv');

      if (blocklyDiv) {
        Blockly.Blocks['string_length'] = {
          init: function() {
            this.appendValueInput('VALUE')
                .setCheck('String')
                .appendField('length of');
            this.setOutput(true, 'Number');
            this.setColour(160);
            this.setTooltip('Returns number of letters in the provided text.');
            this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
          }
        };
        Blockly.Blocks['move_to'] = {
          init: function() {
            this.appendDummyInput()
                .appendField("Move to");
            this.appendValueInput("x")
                .setCheck("Number")
                .appendField("x:");
            this.appendValueInput("y")
                .setCheck("Number")
                .appendField("y:");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
         this.setTooltip("");
         this.setHelpUrl("");
          }
        };
        Blockly.Blocks['straight'] = {
          init: function() {
            this.appendValueInput("dist")
                .setCheck("Number")
                .appendField("Go forward");
            this.appendEndRowInput()
                .appendField("inches");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
         this.setTooltip("");
         this.setHelpUrl("");
          }
        };
        Blockly.Blocks['turn'] = {
          init: function() {
            this.appendValueInput("rot")
                .setCheck("Number")
                .appendField("Turn");
            this.appendEndRowInput()
                .appendField("degrees");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
         this.setTooltip("");
         this.setHelpUrl("");
          }
        };
        Blockly.Blocks['turnToHeading'] = {
          init: function() {
            this.appendValueInput("head")
                .setCheck("Number")
                .appendField("Turn to heading");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
         this.setTooltip("");
         this.setHelpUrl("");
          }
        };
        Blockly.Blocks['leds'] = {
          init: function() {
            this.appendValueInput("LEDCOLOR")
                .setCheck("Colour")
                .appendField("Turn LEDs");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
         this.setTooltip("");
         this.setHelpUrl("");
          }
        };
        javascriptGenerator.forBlock['leds'] = function(block, generator) {
          let color = generator.valueToCode(block, 'LEDCOLOR', 2);
          // TODO: Assemble javascript into code variable.
          var code = 'BlockerLEDS->set_all(0x' + color.substring(2,8).toUpperCase() + ');<br />' + 'Under1->set_all(0x' + color.substring(2,8).toUpperCase() + ');<br />' + 'Under2->set_all(0x' + color.substring(2,8).toUpperCase() + ');<br />' + 'Top->set_all(0x' + color.substring(2,8).toUpperCase() + ');<br />';
          return code;
        };
        javascriptGenerator.forBlock['straight'] = function(block, generator) {
          let distance = generator.valueToCode(block, 'dist', 2);
          // TODO: Assemble javascript into code variable.
          var code = 'straight(' + distance + ');<br />';
          return code;
        };
        javascriptGenerator.forBlock['turn'] = function(block, generator) {
          let rotation = generator.valueToCode(block, 'rot', 2);
          // TODO: Assemble javascript into code variable.
          var code = 'smartTurn(' + rotation + ');<br />';
          return code;
        };
        javascriptGenerator.forBlock['turnToHeading'] = function(block, generator) {
          let heading = generator.valueToCode(block, 'head', 2);
          // TODO: Assemble javascript into code variable.
          var code = 'turnToHeading(' + heading + ');<br />';
          return code;
        };
        javascriptGenerator.forBlock['move_to'] = function(block, generator) {
          let x = generator.valueToCode(block, 'x', 2);
          let y = generator.valueToCode(block, 'y', 2);
          // TODO: Assemble javascript into code variable.
          var code = 'moveToPoint(' + x + ', ' + y + ');<br />';
          return code;
        };
        const toolbox = {
          'kind': 'flyoutToolbox',
          'contents': [
            {
              'kind': 'block',
              'type': 'controls_repeat_ext',
              'inputs': {
                'TIMES': {
                  'shadow': {
                    'type': 'math_number',
                    'fields': {
                      'NUM': 5
                    }
                  }
                }
              }
            },
            {
              'kind': 'block',
              "type": "move_to",
              
              "extensions": ["parent_tooltip_when_inline"]
            },
            {
              'kind': 'block',
              'type': 'straight'
            },
            {
              'kind': 'block',
              'type': 'turn'
            },
            {
              'kind': 'block',
              'type': 'turnToHeading'
            },
            {
              'kind': 'block',
              'type': 'leds'
            },
            {
              'kind': 'block',
              'type': 'math_number',
              'fields': {
                'NUM': 5
              }
            },
            // Block for colour picker.
            {
              'kind': 'block',
              "type": "colour_picker",
              "message0": "%1",
              "args0": [
                {
                  "type": "field_colour",
                  "name": "COLOUR",
                  "colour": "#ff0000"
                }
              ],
              "output": "Colour",
              "extensions": ["parent_tooltip_when_inline"]
            }
          ]
        };
        
      
        const workspace = Blockly.inject(blocklyDiv, {
          toolbox: toolbox,
          scrollbars: false,
          horizontalLayout: true,
          toolboxPosition: "end",
        });
        const supportedEvents = new Set([
          Blockly.Events.BLOCK_CHANGE,
          Blockly.Events.BLOCK_CREATE,
          Blockly.Events.BLOCK_DELETE,
          Blockly.Events.BLOCK_MOVE,
        ]);
        
        function updateCode(event) {
          if (workspace.isDragging()) return; // Don't update while changes are happening.
          if (!supportedEvents.has(event.type)) return;
          const code = javascriptGenerator.workspaceToCode(workspace);
          document.getElementById('textarea').innerHTML = code;
        }
        
        workspace.addChangeListener(updateCode);
      } else {
        console.error("Error: 'blocklyDiv' element not found");
      }
    }
    
render() {
    return (
          <div id="blocklyDiv"></div>
        )
    }
}

export default BlocklyDiv;
