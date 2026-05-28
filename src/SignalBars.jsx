import React from "react";

export default function SignalBars({
    strength = 4,
    bars = 5,
    activeColor = "#22c55e",
    inactiveColor = "#d1d5db",
    width = 6,
    height = 30,
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 3,
                height,
            }}
        >
            {Array.from({ length: bars }).map((_, i) => {
                const level = i + 1;

                return (
                    <div
                        key={level}
                        style={{
                            width,
                            height: `${(level / bars) * 100}%`,
                            background: level <= strength
                                ? activeColor
                                : inactiveColor,
                            borderRadius: 2,
                            transition: "0.2s",
                        }}
                    />
                );
            })}
        </div>
    );
}