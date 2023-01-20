const DropdownComponent = (props)=>{

    const {changeMenu} = props

    return(
        <nav>
            <h2>Dynamic Dropdown</h2>
            <select className='menu' onChange={changeMenu}>
                <option value='เมนูทั้งหมด'>เมนูทั้งหมด</option>
                <option value='ผัด-ทอด'>ผัด-ทอด</option>
                <option value='แกง-ต้มยำ'>แกง-ต้มยำ</option>
                <option value='เครื่องดื่ม'>เครื่องดื่ม</option>
                <option value='สเต็ก'>สเต็ก</option>
            </select>
        </nav>
    )
}

export default DropdownComponent