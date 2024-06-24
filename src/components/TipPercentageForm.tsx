

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  tip: number,
  setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({ tip, setTip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map(tipOption => (
          <div
            key={tipOption.id}
            className=" flex gap-2"
          >
            <label htmlFor="">{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tipOption"
              value={tipOption.value}
              onChange={e => setTip(+e.target.value)} // El carácter + transforma el string a number
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
