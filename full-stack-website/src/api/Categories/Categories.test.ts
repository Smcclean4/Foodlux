import { CartInfoInterface } from "./Categories";
import { Categories } from "./Categories";

describe('making sure that menu items structures conform to cart info interface', () => {
  const { fastfood, finedine, snacks, alcohol }: any = Categories();
  const exampleCompanyStructure: CartInfoInterface[] = [{
    title: expect.any(String),
    menu: expect.arrayContaining([
      expect.objectContaining({
        item: expect.any(String),
        price: expect.any(Number),
        desc: expect.any(String),
        image: expect.any(String),
        quantity: expect.any(Number),
        type: expect.any(String),
        company: expect.any(String),
        category: expect.any(String)
      })
    ])
  }]
  test('checking if individual fastfood items match this structure', () => {
    expect(fastfood).toMatchObject<CartInfoInterface[]>(exampleCompanyStructure)
  })
  test('checking if individual finedine items match this structure', () => {
    expect(finedine).toMatchObject<CartInfoInterface[]>(exampleCompanyStructure)
  })
  test('checking if individual snacks items match this structure', () => {
    expect(snacks).toMatchObject<CartInfoInterface[]>(exampleCompanyStructure)
  })
  test('checking if individual alcohol items match this structure', () => {
    expect(alcohol).toMatchObject<CartInfoInterface[]>(exampleCompanyStructure)
  })
})