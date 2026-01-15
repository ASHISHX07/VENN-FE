const CustomTooltip = ({ active, payload, label }) => {

    if (!active || !payload || payload.length === 0) {
        return null;
    }

    const data = payload[0].payload;

    return (
        <div className='w-fit h-fit p-1 backdrop-blur-lg bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.1)] rounded-lg text-black dark:text-white'>
            <p className='text-black dark:text-white text-xs'>{label}</p>
            <p className={`text-sm font-bold ${data.pnl >= 0 ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                {data.pnl >= 0 ? '+' : ''}₹{data.pnl}
            </p>
        </div>
    )
}

export default CustomTooltip;