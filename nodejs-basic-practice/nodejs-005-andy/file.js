const fs = require('fs')
const uuidv4 = require('uuid/v4')

function readContent(id) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.txt', (err , data) => {
            if(err) reject(err)
            const data_string = data.toString().replace('}{', '},{')
			resolve(data_string)
        })
    })
}

function findContent(id, data) {
    const data_arr = JSON.parse(`[${data}]`)
    const data_filter = data_arr.filter(el => el.id === id)
    return data_filter
}

function writeContent(origin_content, content) {
    const id = uuidv4()
	const new_content = origin_content + JSON.stringify({id, content})
    return new Promise((resolve, reject) => {
        fs.writeFile('data.txt', new_content, err => {
		    if(err) reject(err)
			resolve(id)
        })
    })
}

function updateContent(data, id, content) {
    let data_arr = JSON.parse(`[${data}]`)
    const data_filter = data_arr.filter(el => el.id === id)
    const new_data = data.toString().replace(data_filter[0].content, content)
    return new Promise((resolve, reject) => {
        fs.writeFile('data.txt', new_data, err => {
            if(err) reject(err)
			resolve({ok: true})
        })
    })
}

function deleteContent(data, id) {
    let data_arr = JSON.parse(`[${data}]`)
    const index = data_arr.findIndex(el => el.id === id)
    data_arr.splice(index, 1)
    let data_string = JSON.stringify(data_arr)
    return new Promise((resolve, reject) => {
        fs.writeFile('data.txt', data_string.slice(1, data_string.length-1), err => {
            if(err) reject(err)
            resolve({ok: true})
        })
    })
}

module.exports = {readContent, findContent, writeContent, updateContent, deleteContent}