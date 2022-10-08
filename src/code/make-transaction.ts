export const makeTransferStep1 = `// Create objects 
const owner = Keypair.fromSeed(Buffer.from('some secretKey'))
const mintKey = new PublicKey('kinX...HJq6')
const feePayerKey = new PublicKey('oWNE...Ht8m')

// Get TokenAccount from Owner and Destination
const ownerTokenAccount = getAssociatedTokenAddress(mintKey, owner.publicKey),
const destinationTokenAccount = await getAssociatedTokenAddress(mintKey, getPublicKey(destination))`

export const makeTransferStep2 = `const instruction = createTransferCheckedInstruction(
    ownerTokenAccount,
    mintKey,
    destinationTokenAccount,
    owner.publicKey,
    addDecimals(amount, mintDecimals).toNumber(),
    mintDecimals,
    [],
    TOKEN_PROGRAM_ID,
)`

export const makeTransferStep3 = `const transaction = new Transaction({
  blockhash,
  feePayer: feePayerKey,
  lastValidBlockHeight,
  signatures: [{ publicKey: owner.publicKey, signature: null }],
}).add(instruction)

// Partially sign the transaction
transaction.partialSign(owner)

// Send to Solana or API`

export const makeTransferKinetic = `// Get the keypair from the mnemonic
const owner = Keypair.fromMnemonic('owner mnemonic')

const tx = await sdk.makeTransfer({
  amount: "42",
  destination: "BobQ...oJ9y",
  owner,
})`

export const makeTransferKineticDart = `// Get the keypair from the mnemonic
final owner = Keypair.fromMnemonic('owner mnemonic');

final tx = await sdk.makeTransfer(
  MakeTransferOptions(
    amount: "42",
    destination: "BobQ...oJ9y",
    owner,
  ));`
