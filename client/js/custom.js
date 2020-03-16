



function buyItem() {
    console.log("button pressed");

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.43.184:8080"));
    }
    web3.eth.defaultAccount = web3.eth.accounts[0];

    var rpds = new web3.eth.Contract([
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_rice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_sugar",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_wheat",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_kerosene",
                    "type": "uint256"
                }
            ],
            "name": "addPerson",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                }
            ],
            "name": "findPerson",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "people",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_rice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_sugar",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_wheat",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_kerosene",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "peopleCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_kerosene",
                    "type": "uint256"
                }
            ],
            "name": "transactKerosene",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rice",
                    "type": "uint256"
                }
            ],
            "name": "transactRice",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_sugar",
                    "type": "uint256"
                }
            ],
            "name": "transactSugar",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_aadhar",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_wheat",
                    "type": "uint256"
                }
            ],
            "name": "transactWheat",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ], '0x7FbAc417B398eA6b2063C73E13D909D54485Bdad');




    if (document.getElementById("rice-radio").checked) {
        var qty = document.getElementById("quantity").value;
        var str = "நீங்கள் " + qty + " கிலோகிராம் அரிசியைத் தேர்ந்தெடுத்துள்ளீர்கள்.";
        var strEng = "You have chosen " + qty + " Kilograms of Rice";
        var printStr = strEng + " (" + str + " )";
        if (confirm(printStr)) {
            console.log("Rice " + qty);
            document.getElementById("itemForm").submit();
            rpds.methods.transactRice(333344445555,qty).send({from: '0xDB49c393EF8b701bEeB169364ecED8c98Bc23146'})
                .then(function(receipt){
                    console.log(receipt);// receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
                });
        }

        else
            console.log("declined");

    } else if (document.getElementById("sugar-radio").checked) {
        var qty = document.getElementById("quantity").value;
        var str = "நீங்கள் " + qty + " கிலோகிராம் சர்க்கரை தேர்ந்தெடுத்துள்ளீர்கள்.";
        var strEng = "You have chosen " + qty + " Kilograms of Sugar";
        var printStr = strEng + " (" + str + " )";
        if (confirm(printStr)) {
            console.log("Sugar " + qty);
            document.getElementById("itemForm").submit();
            rpds.methods.transactSugar(333344445555,qty).send({from: '0xDB49c393EF8b701bEeB169364ecED8c98Bc23146'})
                .then(function(receipt){
                    console.log(receipt);// receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
                });
        }
        else
            console.log("declined");
    } else if (document.getElementById("kerosene-radio").checked) {
        var qty = document.getElementById("quantity").value;
        var str = "நீங்கள் " + qty + " லிட்டர் மண்ணெண்ணெய் தேர்ந்தெடுத்துள்ளீர்கள்.";
        var strEng = "You have chosen " + qty + " Litres of Kerosene";
        var printStr = strEng + " (" + str + " )";
        if (confirm(printStr)) {
            console.log("Kerosene " + qty);
            document.getElementById("itemForm").submit();
            rpds.methods.transactKerosene(333344445555,qty).send({from: '0xDB49c393EF8b701bEeB169364ecED8c98Bc23146'})
                .then(function(receipt){
                    console.log(receipt);// receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
                });
        }
        else
            console.log("declined");
    } else if (document.getElementById("wheat-radio").checked) {
        var qty = document.getElementById("quantity").value;
        var str = "நீங்கள் " + qty + " கிலோகிராம் கோதுமை தேர்ந்தெடுத்துள்ளீர்கள்.";
        var strEng = "You have chosen " + qty + " Kilograms of Wheat";
        var printStr = strEng + " (" + str + " )";
        if (confirm(printStr)) {
            console.log("Wheat " + qty);
            document.getElementById("itemForm").submit();
            rpds.methods.transactWheat(333344445555,qty).send({from: '0xDB49c393EF8b701bEeB169364ecED8c98Bc23146'})
                .then(function(receipt){
                    console.log(receipt);// receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
                });
        }
        else
            console.log("declined");
    } else
        alert("Invalid")
}

