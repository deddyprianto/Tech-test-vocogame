import { Card, Image, Typography, Button, Badge } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FooterPay = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (error) {
      // Show error message if something goes wrong
      console.log("Terjadi kesalahan!");
    } finally {
      // Clean up
      router.push("/payment");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "rgba(40, 40, 40, 1)",
        width: "90%",
        margin: "auto",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <div>
        <p>12976 Diamonds (10839 + 2137 Bonus)</p>
        <p>Harga: Rp 2.755.500,-</p>
      </div>

      <div>
        <Badge.Ribbon text="15% off" color="white" className="ribbon-custom">
          <Button
            onClick={handleClick}
            style={{
              padding: 16,
              width: 150,
              height: 44,
              opacity: isLoading ? ".7" : "1",
            }}
            type="primary"
          >
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <div>Beli Sekarang</div>
            )}
          </Button>
        </Badge.Ribbon>
      </div>
    </div>
  );
};

export default FooterPay;
