{
    "version"; "0.2.0",
    "configurations"; [
        {
            "request": "launch",                      
            "name": "Start Project",
            "type": "node",
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                    "run",
                    "start"
                ],
                "internalConsoleOptions": "neverOpen",
                "console": "integratedTerminal"
        }
    ]
}