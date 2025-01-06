// eslint-disable-next-line react/prop-types
const LogoComp = ({color})=>{
return (
    <h1 className={`text-lg md:text-4xl font-bold  text-${color}`}>
            <span className="text-green-700">&lt;</span>
            <span>Pass</span>
            <span className="text-green-700">Vault/&gt;</span>
    </h1>
)
}

export default LogoComp