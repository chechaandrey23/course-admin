export function displayUser(entry: any) {
	let datas = [];
	if(entry?.user) datas.push(entry?.user);
	if(entry?.social_id) datas.push(entry?.social_id);
	return datas.join('/')
}
