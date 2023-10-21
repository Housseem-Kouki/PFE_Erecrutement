<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use App\Repository\CandidatureRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=CandidatureRepository::class)
 * @ApiResource(formats={"json"})
 */
class Candidature
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $createdAt;

    

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="candidatures")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $candidat;

    /**
     * @ORM\Column(type="integer")
     * @ORM\JoinColumn(name="candidat_id", referencedColumnName="id")
     */
    private $candidat_id;

    /**
     * @ORM\ManyToOne(targetEntity=Offre::class, inversedBy="candidatures")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $offre;

    /**
     * @ORM\Column(type="integer")
     * @ORM\JoinColumn(name="offre_id", referencedColumnName="id")
     */
    private $offre_id;

    /**
     * @ORM\OneToMany(targetEntity=Entretien::class, mappedBy="candidature", orphanRemoval=true)
     */
    private $entretiens;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    public function __construct()
    {
        $this->entretiens = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    

    public function getCandidat(): ?Candidat
    {
        return $this->candidat;
    }

    public function setCandidat(?Candidat $candidat): self
    {
        $this->candidat = $candidat;

        return $this;
    }

    public function getCandidatId(): ?int
    {
        return $this->candidat_id;
    }

    public function setCandidatId(int $candidat_id): self
    {
        $this->candidat_id = $candidat_id;

        return $this;
    }

    public function getOffre(): ?Offre
    {
        return $this->offre;
    }

    public function setOffre(?Offre $offre): self
    {
        $this->offre = $offre;

        return $this;
    }

    public function getOffreId(): ?int
    {
        return $this->offre_id;
    }

    public function setOffreId(int $offre_id): self
    {
        $this->offre_id = $offre_id;

        return $this;
    }

    /**
     * @return Collection|Entretien[]
     */
    public function getEntretiens(): Collection
    {
        return $this->entretiens;
    }

    public function addEntretien(Entretien $entretien): self
    {
        if (!$this->entretiens->contains($entretien)) {
            $this->entretiens[] = $entretien;
            $entretien->setCandidature($this);
        }

        return $this;
    }

    public function removeEntretien(Entretien $entretien): self
    {
        if ($this->entretiens->removeElement($entretien)) {
            // set the owning side to null (unless already changed)
            if ($entretien->getCandidature() === $this) {
                $entretien->setCandidature(null);
            }
        }

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }
}
