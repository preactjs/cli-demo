import { hydrate, options, toChildArray } from 'preact';
import './style';
import App from './components/app';

// const old = options.vnode;
// options.vnode = vnode => {
// 	let children = vnode.props.children;
// 	if (children) {
// 		if (Array.isArray(children)) {
// 			children = toChildArray(children);
// 			for (let i=0, prev, child; i<children.length; i++) {
// 				child = children[i];
// 				if (typeof child === 'string' || typeof child === 'number') {
					
// 				}
// 				prev = child;
// 			}
// 		}
// 	}
// };

if (typeof window !== 'undefined') {
	const observer = new MutationObserver(records => {
		for (let mutation of records) {
			if (mutation.attributeName) {
				console.log(mutation.target, `.setAttribute("${mutation.attributeName}", "${mutation.target.getAttribute(mutation.attributeName)}")`);
			}
			if (mutation.addedNodes.length) {
				for (let node of mutation.addedNodes) console.log(mutation.target, '.append(', node, ')');
			}
			if (mutation.removedNodes.length) {
				for (let node of mutation.removedNodes) console.log(node, '.remove()');
			}
		}
	});
	observer.observe(document.body, {
		attributes: true,
		childList: true,
		subtree: true
	});

	console.log('BOOTED');
}


let app = App;

if (typeof window !== 'undefined') {
	app = undefined;
	const root = document.getElementById('app');
	hydrate(<App />, root.parentNode, root);
}

export default app;
