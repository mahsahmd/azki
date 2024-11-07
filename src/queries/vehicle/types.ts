export type VehicleModel = {
  id: number;
  title: string;
};
export type VehicleTypeResponse = {
  id: number;
  title: string;
  usages: VehicleModel[];
};
