export default function welcome(state, action) {
	if(action.type=== 'ceshi'){
		return {ceshi: "xiaoyang"}
	}
	return {ceshi: "shabi"}
}