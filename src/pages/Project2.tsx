import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function Project2() {

  return (
    <>
    <div className='bg-zinc-900 min-h-screen text-zinc-400 font-[Inter] text-left text-white'>

      <div className="px-6 md:px-20">
      {/* Nav */}
      <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
        <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
      </div>

      <h1 className="md:ml-40 md:mr-40 mt-12 md:mt-30 text-center text-3xl md:text-5xl text-zinc-200 font-bold">
        AST Parser + GitHub Action Code Comparison Tool
      </h1>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40">
        Over the past few weeks, Carter Davis and I worked on a project that analyzes changes in Python files at the AST level. Instead of only looking at line-by-line differences, the tool parses Python code into abstract syntax trees and compares the structure of the old and new versions. The goal was to make code changes easier to understand, especially when functions are moved, added, deleted, or changed in a way that a normal text diff might not explain clearly.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Problem</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Traditional Git diffs are useful, but they mostly show text changes. This can make it harder to understand what changed structurally in the code. For example, if a function is moved to another part of a file, a normal diff may make it look like a large deletion and insertion. Our tool tries to identify that as a function movement instead.
      </div>

      <div className="mt-10 md:mt-20 md:mr-40 md:ml-40 font-bold text-zinc-200 text-xl">Solution</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        We built a tool that reads the previous and current version of a Python file, parses both files with Tree-sitter, and compares their AST structures.<br/><br/>
        The output includes:<br/>
        ASTs for both files<br/>
        a similarity score<br/>
        inserted, deleted, and relabeled nodes<br/>
        a cleaner function-level summary
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">GitHub Actions Automation</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        One of the most important parts of the project was automating the comparison process with GitHub Actions.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`name: AST Parse Changed Files

on:
  push:

jobs:
  parse-changed:
    runs-on: ubuntu-latest`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This workflow runs automatically whenever code is pushed. That allowed the tool to become part of the development process instead of something that had to be run manually.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Finding Changed Python Files</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The workflow compares the current commit against the previous commit, then finds Python files that were added, copied, or modified.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`CHANGED=$(git diff --name-only --diff-filter=ACM "$PARENT" "$CURRENT" -- '*.py')`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This design decision was important because we only wanted to analyze files that actually changed. It keeps the action focused and avoids unnecessary parsing.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Comparing Old and New Versions</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        For each changed Python file, the workflow pulls the old version from the previous commit and copies the current version into a temporary file.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`git show "$PARENT:$FILE" > /tmp/old_version.py
cp "$FILE" /tmp/new_version.py`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40 mb-6 md:mb-10">
        These two versions are then mounted into a Docker container so the same parsing environment is used every time.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`docker run --rm \\
  -v /tmp/old_version.py:/app/old_version.py \\
  -v /tmp/new_version.py:/app/new_version.py \\
  ast-parser compare.py old_version.py new_version.py`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This helped me better understand how Docker can package code and dependencies so a tool runs consistently across different machines.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Docker Environment</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The project uses a Dockerfile to create a controlled Python environment with Tree-sitter installed.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`FROM python:3.11-slim

WORKDIR /app

RUN pip install --no-cache-dir \\
    tree-sitter==0.25.2 \\
    tree-sitter-python==0.25.0`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This made the GitHub Action much easier to run because the action did not need to manually install and configure everything each time.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Parsing Python With Tree-sitter</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        Tree-sitter allows the program to parse Python source code into a syntax tree.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`py_language = Language(tspython.language())
parser = Parser(py_language)
tree = parser.parse(source_code)`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This was important because the project needed to understand code structure, not just raw text. By using Tree-sitter, the tool could recognize nodes like function definitions, identifiers, parameters, and blocks.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Printing the AST</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The parser recursively walks through each node in the tree and prints a readable version of the syntax tree.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`def print_tree(node, source_code: bytes, indent: int = 0) -> None:
    prefix = "  " * indent
    text = source_code[node.start_byte:node.end_byte].decode("utf-8", errors="replace")
    text = text.replace("\\n", "\\\\n")
    print(f"{prefix}{node.type}: {text}")`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This gave us a way to debug and visually understand how Tree-sitter was interpreting the Python file.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">TreeNode Representation</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        To compare ASTs, the project converts Tree-sitter nodes into a custom TreeNode structure.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`@dataclass
class TreeNode:
    label: str
    children: list["TreeNode"] = field(default_factory=list)
    parent: Optional["TreeNode"] = field(default=None, repr=False)
    line: Optional[int] = None`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This made the AST easier to work with because each node stores its label, children, parent, and line number. The line number was especially useful for reporting where functions were added, deleted, or moved.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Flexible Tree Matching Algorithm</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        One of the main challenges was deciding how to compare two trees. We used a flexible tree matching approach that assigns costs to different types of changes.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`@dataclass
class CostModel:
    w_r: float = 1.0
    w_n: float = 1.0
    w_a: float = 0.5
    w_s: float = 0.5`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        The cost model helps determine how different two ASTs are. It considers relabeling, unmatched nodes, ancestry changes, and sibling ordering changes.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Similarity Score</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        After matching the trees, the program calculates a similarity score.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`matching, cost = flexible_tree_match(t1, t2, model=model, seed=42)
score = math.exp(-cost)`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        A lower cost means the trees are more similar. Converting the cost into a score made the output easier to interpret.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Function-Level Summary</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        The most useful part of the project was the human-readable summary. Instead of only showing raw AST differences, the tool extracts function definitions and compares them by name.
      </div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`def collect_functions(root):
    functions = {}

    def walk(node):
        if node.label == "function_definition":
            name = get_function_name(node)
            if name:
                functions[name] = node
        for child in node.children:
            walk(child)

    walk(root)
    return functions`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This allowed the tool to report higher-level changes like added, deleted, moved, or modified functions.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Example Output</div>

      <pre className='md:mr-40 md:ml-40 mt-6 md:mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-xs md:text-sm'>
        <code>
          {`Function summary:
  - Added function "test" on line 4
  - Deleted function "anotherFunction" from line 17
  - Function "ILikeMath" moved from line 13 to line 15
  - Function "hello" changed body`}
        </code>
      </pre>

      <div className="mt-6 md:mt-10 md:ml-40 md:mr-40">
        This kind of output is much easier to understand than a long list of raw AST nodes.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Design Reasoning</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        A major design decision was separating raw AST comparison from the function-level summary. The raw AST diff gives detailed information, but it can be difficult to read. The function summary makes the tool more practical for a developer because it explains the most important changes in plain language.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">What I Learned</div>
      <div className="mt-5 md:ml-40 md:mr-40">
        This project helped me better understand Docker, GitHub Actions, Tree-sitter, ASTs, and code analysis. It also showed me the difference between comparing code as text and comparing code as structure. I also gained more experience working in a collaborative development environment, where Carter and I had to make design decisions, test changes, and improve the output based on what would actually be useful to a developer.
      </div>

      <div className="mt-10 md:mt-20 md:ml-40 md:mr-40 font-bold text-zinc-200 text-xl">Final Thoughts</div>
      <div className="mt-5 md:ml-40 md:mr-40 mb-10 pb-10">
        This project gave me a better understanding of how developer tools are built. It also helped me see how automation can improve a workflow by giving developers useful feedback immediately after code is pushed.<br/><br/>
        In the future, this tool could be expanded to detect more advanced changes, such as renamed functions, changed control flow, or similarities across multiple files.
      </div>

      </div>

      <Footer />
    </div>
    </>
  );
}

export default Project2;