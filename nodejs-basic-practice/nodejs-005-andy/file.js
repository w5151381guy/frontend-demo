const fs = require('fs')
const uuidv4 = require('uuid/v4')

function readContent(id) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.txt', (err , data) => {
            if(err) throw(err)
            let data_arr = JSON.parse(`[${data.toString()}]`)
            const data_filter = data_arr.filter(el => el.id === id)
            resolve(data_filter)
        })
    })
}

function writeContent(content) {
    const id = uuidv4()
    return new Promise((resolve, reject) => {
	    fs.exists('data.txt', exists => {
            if(exists) {
	            const promise = new Promise((resolve, reject) => {
                    fs.appendFile('data.txt', `,{"id": "${id}", "content": "${content}"}`, err => {
                        if(err) throw(err)
                        resolve()
                    })
                }).then(() => resolve(id))
            }
            else {
                const promise = new Promise((resolve, reject) => {
                    fs.writeFile('data.txt', `{"id": "${id}", "content": "${content}"}`, err => {
                        if(err) throw(err)
                        resolve()
                    })
                }).then(() => resolve(id))
            }
        })
    })
}

function updateContent(id, content) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.txt', (err , data) => {
            if(err) throw(err)
            let data_arr = JSON.parse(`[${data.toString()}]`)
            const data_filter = data_arr.filter(el => el.id === id)
            const new_data = data.toString().replace(data_filter[0].content, content)
			const promise = new Promise((resolve, reject) => {
                fs.writeFile('data.txt', new_data, err => {
                    if(err) throw(err)
                    resolve()
                })
            }).then(resolve)
        })
    })
}

function deleteContent(id) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.txt', (err , data) => {
            if(err) throw(err)
            let data_arr = JSON.parse(`[${data.toString()}]`)
            const index = data_arr.findIndex(el => el.id === id)
            const new_data = data_arr.splice(index-1, 1)
            let data_string = JSON.stringify(new_data)
			const promise = new Promise((resolve, reject) => {
                fs.writeFile('data.txt', data_string.slice(1, data_string.length-1), err => {
                    if(err) throw(err)
                    resolve()
                })
            }).then(resolve)
        })
    })
}

module.exports = {readContent, writeContent, updateContent, deleteContent}