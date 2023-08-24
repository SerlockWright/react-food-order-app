/* eslint-disable react/prop-types */
import Input from '../../UI/Input'

function MealItemAddCart({ id }) {
    return (
        <form>
            <Input
                label='Amount'
                input={{
                    id: `amount_${id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
        </form>
    )
}

export default MealItemAddCart