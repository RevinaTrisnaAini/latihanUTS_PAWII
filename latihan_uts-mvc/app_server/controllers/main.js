const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 

//buat controllers untuk halaman kontak
const kontak = (req, res)=> {
	res.render('kontak', { title: 'Express' }); 
}; 

module.exports = { index, kontak }; 