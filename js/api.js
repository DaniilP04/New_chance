const egypt = document.getElementById('Egypt')
const upward = document.getElementById('Upward')
const well = document.getElementById('Well')

async function Api() {
    const respons_egypt = await fetch("https://api.open-meteo.com/v1/forecast?latitude=27&longitude=30&current=temperature_2m&hourly=temperature_2m")
    const respons_upward = await fetch("https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1647&current=temperature_2m&hourly=temperature_2m")
    const respons_well = await fetch("https://api.open-meteo.com/v1/forecast?latitude=35.0845&longitude=-106.6511&current=temperature_2m&hourly=temperature_2m")
    const data_egypt = await respons_egypt.json()
    const data_upward = await respons_upward.json()
    const data_well = await respons_well.json()
    return [data_egypt,data_upward,data_well]
}

async function output() {
    try{
        let out = await Api()
        console.log(out)
        egypt.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        upward.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        well.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}
output()