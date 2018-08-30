<div>
    <div className="wrapper">
        <div className="A"
            style={{ display: `${shouldShow === true ? 'block' : 'none'}` }}>
            <div className="C">
                <div className="D"></div>
            </div>
        </div>
        <div className="B"></div>
    </div>

    {/* ================== vs ================ */}

    <div className="wrapper">
        {shouldShow ?
            <div className="A">
                <div className="C">
                    <div className="D"></div>
                </div>
            </div>
            : ''}
        <div className="B"></div>
    </div>
</div>

/* conclusion: 保持稳定的 DOM 结构有利于提高性能 */