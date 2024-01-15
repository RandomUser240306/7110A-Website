import './Blocks.css';
import BlocklyDiv from './robotBlocks';

function Blocks() {
  return (
    <div className="Blocks">
        <BlocklyDiv/>
        <h2 id='codetitle'>Generated Code</h2>
        <p id='textarea'></p>
    </div>
  );
}

export default Blocks;
